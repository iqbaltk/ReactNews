import axios from "axios";
import React, { useEffect, useState } from "react"
import { Card, CardBody, CardImg, CardSubtitle, CardTitle } from "reactstrap";

const ListNews = (props: any) => {
    const { pageSize = 10 } = props
    const [data, setData] = useState<any>([]);
    const { REACT_APP_API_KEY } = process.env

    useEffect(() => {
        const fetchData = async () => {
            await axios.get(
                `https://newsapi.org/v2/top-headlines?country=id&pageSize=${pageSize}`,
                {
                    headers: { Authorization: "Bearer " + REACT_APP_API_KEY},
                }
            )
                .then((res) => {
                    setData(
                        res.data.articles.map((item: any) => {
                            return {
                                title: item.title,
                                description: item.description,
                                author: item.author,
                                url: item.url,
                                urlToImage: item.urlToImage,
                                publishedAt: item.publishedAt,
                                content: item.content,
                                source: item.source.name,
                            };
                        })
                    )
                })
                .catch((err) => {
                    alert(err)
                    alert(err.response.data.message);
                })
        };
        fetchData()
    }, [])


    return (
        <>
            <div className="row">
                {data.map(function (item: any, index: any) {
                    return (
                        <>
                            {item ? (
                                <div className="col-sm-12 col-md-6 col-lg-4 mb-3 mt-3" key={index}>
                                    <a href={`/detail/${item.title}`} rel="noreferrer" style={{ textDecoration: 'none' }}>
                                        <Card body className="btn btn-primary text-primary h-100 bg-body">
                                            <CardBody>
                                                <CardImg src={`${item.urlToImage}`} alt="Image" className="mb-4" />

                                                <CardTitle tag="h5">
                                                    {item.title}
                                                </CardTitle>
                                                <CardSubtitle
                                                    className="mb-2 text-muted"
                                                    tag="h6"
                                                >
                                                    {item.source}
                                                </CardSubtitle>

                                            </CardBody>
                                        </Card>
                                    </a>
                                </div>
                            ) : (<div className="col">Tunggu Sebentar....</div>)}
                        </>
                    )
                })}
                {data.length === 0 && (
                    <div className="col">Berita Tidak Ada</div>
                )}
            </div>
        </>
    )
}
export default ListNews