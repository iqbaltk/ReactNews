import axios from "axios";
import React, { useEffect, useState } from "react"
import { useParams, useHistory } from 'react-router-dom';
import { Card, CardBody, CardImg, CardSubtitle, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

const SearchNews = (props: any) => {
    const { pageSize = 10 } = props

    const [data, setData] = useState<any>([
        {
            title: "",
            description: "",
            author: "",
            url: "",
            urlToImage: "",
            publishedAt: "",
            content: "",
            source: "",
        },
    ]);

    // const API_KEY = "401ed03bc7c54ee684ff0ebae6ee5ca6"
    // const API_KEY = "03412841475d44f1aed32b9e3e741c59"
    const API_KEY = "dumy"

    let history = useHistory()
    const params = useParams<any>()

    if (!params["cari"]) {
        history.push("/")
    }

    useEffect(() => {
        const fetchData = async () => {
            await axios.get(
                `https://newsapi.org/v2/top-headlines?q=${params["cari"]}&country=id`,
                {
                    headers: { Authorization: "Bearer " + API_KEY },
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
    }, [params])

    return (
        <>
            <div className="row">
                {data.map((item: any, index: any) => {
                    return (
                        <>
                            {item.title ? (
                                <div className="col-sm-12 col-md-6 col-lg-4 mb-3 mt-3">
                                    {/* <a href={`/detail/${item.title}`} rel="noreferrer" style={{ textDecoration: 'none' }}> */}
                                    <Link to={`/detail/${item.title}`} style={{ textDecoration: 'none' }}>
                                        <Card body color="light" className="h-100" >
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
                                    </Link>
                                    {/* </a> */}
                                </div>
                            ) : (<div className="col">Tunggu Sebentar</div>)}
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
export default SearchNews