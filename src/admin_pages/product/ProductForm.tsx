import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { createProduct, getProduct, updateProduct } from "../../client_api/product";
import { Link } from "react-router-dom";

export type PRODUCT_TYPE = {
    name: string;
    desc: string;
    price: number;
    category: string;
    image: string;
    status: number;
};

function ProductForm() {
    const navigate = useNavigate();

    const { id } = useParams();
    const [imageBase64, setImageBase64] = useState<any>('');

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues: {
            name: "",
            desc: "",
            price: 0,
            category: "",
            image: "",
            status: 0,
        },
    });
    const onSubmit: SubmitHandler<PRODUCT_TYPE> = (data) => {
        const submitData = {
            ...data,
            price: +data.price,
            status: +data.status,
            image: imageBase64  
        };
        if (id) {
            return handleUpdateProduct(submitData);
        }
        return handlecreateProduct(submitData);
    };

    const handlecreateProduct = async (data: PRODUCT_TYPE) => {
        const response = await createProduct(data);

        if (response.status === 201) {
            navigate("/admin/product");
        }
    };

    const handleUpdateProduct = async (data: PRODUCT_TYPE) => {
        const response = await updateProduct(id, data);

        if (response.status === 200) {
            navigate("/admin/product");
        }
    };

    const handleGetProduct = async (id: string) => {
        const response = await getProduct(id);
        if (response.status === 200) {
            reset({
                ...response.data,
                status: `${response.data.status}`,
            });
        }
    };

    const getEventResult = (event: any) => {
        if (event && event.target && typeof event.target.result == 'string') {
            return event.target.result;
        }

        return '';
    };

    const handleChangeFile = (event: any) => {
        // const acceptImageTypes = ['image/png', 'image/jpg'];
        const file = event.target.files[0];
        if (!file) {
            console.log('Kh??ng c?? file');
            return;
        } else if (file.size > 500000) {
            console.log('File qu?? l???n');
            return;
        } 
        // else if (!acceptImageTypes.includes(file.type)) {
        //     console.log('File kh??ng ????ng ?????nh d???ng');
        //     return;
        // }

        // 1. ?????nh ngh??a 1 ?????i t?????ng ?????c file
        const reader = new FileReader();
        // 2. ?????nh ngh??a vi???c load file
        reader.onload = (e) => {
            const image = new Image();
            if (e && e.target) {
                image.src = getEventResult(e);
                console.log(image.width, image.height, file.size, file.type);
                setImageBase64(e.target.result);
            }
        };

        // 3. Load file m?? l???y ???????c t??? input
        reader.readAsDataURL(file);
    };

    useEffect(() => {
        if (id) {
            handleGetProduct(id);
        }
    }, [id]);

    return (
        <div>

            <form
                onSubmit={handleSubmit(onSubmit)} style={{
                    width: "60%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "20px",
                }}
            >

                <div className="">
                    <div className="mb-3">
                        <label className="form-label">T??n s???n ph???m</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder='S???n ph???m'
                            {...register(
                                'name',
                                {
                                    required: { value: true, message: 'Kh??ng ???????c b??? tr???ng' },
                                }
                            )}
                        />
                        <div id="emailHelp" className="form-text" style={{ color: 'red' }}>
                            {errors.name ? errors.name.message : ''}
                        </div>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">M?? t???</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder='M?? t???'
                            {...register(
                                'desc',
                                {
                                    required: { value: true, message: "Kh??ng ???????c b??? tr???ng" }
                                }
                            )}
                        />
                        <div id="emailHelp" className="form-text" style={{ color: 'red' }}>
                            {errors.desc ? errors.desc.message : ''}
                        </div>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Gi??</label>
                        <input
                            className="form-control"
                            type="number"
                            placeholder='Gi??'
                            {...register(
                                'price',
                                {
                                    required: { value: true, message: "Kh??ng ???????c b??? tr???ng" }
                                }
                            )}
                        />
                        <div id="emailHelp" className="form-text" style={{ color: 'red' }}>
                            {errors.price ? errors.price.message : ''}
                        </div>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Danh m???c</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder='M?? t???'
                            {...register(
                                'category',
                                {
                                    required: { value: true, message: "Kh??ng ???????c b??? tr???ng" }
                                }
                            )}
                        />
                        <div id="emailHelp" className="form-text" style={{ color: 'red' }}>
                            {errors.category ? errors.category.message : ''}
                        </div>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">???nh</label>
                        <input
                            className="form-control"
                            type="file"
                            {...register(
                                'image',
                                {
                                    required: { value: true, message: "Kh??ng ???????c b??? tr???ng" }
                                }
                            )}
                            onChange={(event) => handleChangeFile(event)}
                            
                        />
                        <div id="emailHelp" className="form-text" style={{ color: 'red' }}>
                            {errors.image ? errors.image.message : ''}
                        </div>
                        <img src={imageBase64} width={100} alt="" />

                    </div>
                    <div className="mb-3">
                        <label className="form-label">Tr???ng th??i</label> <br />
                        <input className="form-check-input" type="radio" {...register('status')} value={1} defaultChecked />K??ch ho???t
                        <input className="form-check-input" type="radio" {...register('status')} value={0} />Kh??ng k??ch ho???t
                    </div>

                    <button className="btn btn-primary">
                        Submit
                    </button>
                    <Link
                        className="btn btn-dark"
                        style={{ margin: "0px 10px" }}
                        to={"/admin/product"}
                    >
                        Tr??? L???i
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default ProductForm;
