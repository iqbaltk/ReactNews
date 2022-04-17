import axios from "axios";
import moment from "moment-timezone";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
    CardBody,
    CardImg,
    CardTitle,
} from "reactstrap";
import { CardSubtitle, CardText } from 'reactstrap';
import ListNews from '../ListNews/ListNews';

const DetailNews = () => {
    const [data, setData] = useState<any>([]);
    const title = useParams<any>()
    const { REACT_APP_API_KEY } = process.env

    useEffect(() => {
        axios
            .get(`https://newsapi.org/v2/top-headlines?country=id&pageSize=1&q=${title["title"]}`,
                {
                    headers: { Authorization: "Bearer " + REACT_APP_API_KEY},
                }
            )
            .then((res) => {
                let result = res.data.articles[0]

                setData({
                    title: result.title,
                    description: result.description,
                    author: result.author,
                    url: result.url,
                    urlToImage: result.urlToImage,
                    publishedAt: result.publishedAt,
                    content: result.content,
                    source: result.source.name,
                })
            })
            .catch((err) => {
                alert(err)
                alert(err.response.data.message);
            })
    }, []);

    return (
        <>
            <div className="col">
                {data.url ? (
                    <CardBody className="mb-5 mt-3">
                        <CardTitle tag="h1" className="display-7 mb-3">
                            {data.title}
                        </CardTitle>
                        <CardSubtitle className="mt-4 fw-bold" tag="h6" >
                            <span className="text-muted">{moment.tz(data.publishedAt, 'YYYY-MM-DD').tz("Asia/Jakarta").format('YYYY-MM-DD HH:mm')}</span><br />
                        </CardSubtitle>
                        <CardSubtitle className="mt-1 mb-4 fw-bold" tag="h6" >
                            {data.author} - <span className="text-warning">{data.source}</span>
                        </CardSubtitle>
                        <CardImg src={`${data.urlToImage}`} height={560} alt="background" className="mb-4" />
                        <CardText>
                            {data.content}
                        </CardText>
                        <a href={`${data.url}`} target={"_blank"} rel="noreferrer"><button className="btn btn-primary">
                            Lihat Selengkapnya
                        </button></a>
                    </CardBody>
                ) : (("Tunggu Sebentar...."))}

                {data.url && (
                    <>
                        <hr />
                        <h3 className="mb-4">Berita Populer</h3>
                        <ListNews pageSize="3" />
                    </>
                )}

            </div>
        </>
    );
};
export default DetailNews;
