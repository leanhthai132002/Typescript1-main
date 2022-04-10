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
            console.log('Không có file');
            return;
        } else if (file.size > 500000) {
            console.log('File quá lớn');
            return;
        } 
        // else if (!acceptImageTypes.includes(file.type)) {
        //     console.log('File không đúng định dạng');
        //     return;
        // }

        // 1. Định nghĩa 1 đối tượng đọc file
        const reader = new FileReader();
        // 2. Định nghĩa việc load file
        reader.onload = (e) => {
            const image = new Image();
            if (e && e.target) {
                image.src = getEventResult(e);
                console.log(image.width, image.height, file.size, file.type);
                setImageBase64(e.target.result);
            }
        };

        // 3. Load file mà lấy được từ input
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
                        <label className="form-label">Tên sản phẩm</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder='Tiêu đề'
                            {...register(
                                'name',
                                {
                                    required: { value: true, message: 'Bắt buộc' },
                                }
                            )}
                        />
                        <div>{errors.name?.message}</div>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Mô tả</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder='Mô tả'
                            {...register(
                                'desc',
                                {
                                    required: true
                                }
                            )}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Giá</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder='Mô tả'
                            {...register(
                                'price',
                                {
                                    required: true
                                }
                            )}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Danh mục</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder='Mô tả'
                            {...register(
                                'category',
                                {
                                    required: true
                                }
                            )}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Ảnh</label>
                        <input
                            className="form-control"
                            type="file"
                            {...register(
                                'image',
                                {
                                    required: true
                                }
                            )}
                            onChange={(event) => handleChangeFile(event)}
                            
                        />
                        <img src={imageBase64} width={100} alt="" />

                    </div>
                    <div className="mb-3">
                        <label className="form-label">Trạng thái</label> <br />
                        <input className="form-check-input" type="radio" {...register('status')} value={1} defaultChecked />Kích hoạt
                        <input className="form-check-input" type="radio" {...register('status')} value={0} />Không kích hoạt
                    </div>

                    <button className="btn btn-primary">
                        Submit
                    </button>
                    <Link
                        className="btn btn-dark"
                        style={{ margin: "0px 10px" }}
                        to={"/admin/product"}
                    >
                        Trở Lại
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default ProductForm;
