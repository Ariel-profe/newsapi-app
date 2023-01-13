import { useState, useEffect, createContext, FC, ReactElement } from "react";
import { SelectChangeEvent } from "@mui/material";
import axios from "axios";
import { Article } from "../interfaces/NewsResponse";


interface ContextProps{
    category: string;
    handleChangeCategory: (e: SelectChangeEvent<string>) => void;
    notices: Article[] | undefined;
    totalNotice: number;
    handleChangePage: (e: any, value:number) => void;
    page: number;
};

export const NewsContext = createContext( {} as ContextProps);

interface Props {
    children: ReactElement;
};

export const NewsProvider:FC<Props> = ({children}) => {

    const [category, setCategory] = useState('general');
    const [notices, setNotices] = useState<Article[]>([]);
    const [page, setPage] = useState<number>(1);
    const [totalNotice, setTotalNotice] = useState(0);
    
      const consultApiCategory = async()=> {
        const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;

        const {data} = await axios(url);

        setNotices(data.articles);
        setTotalNotice(data.totalResults);
        setPage(1);
      };

      const consultApiPage = async()=> {
        const url = `https://newsapi.org/v2/top-headlines?country=ar&page=${page}&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;

        const {data} = await axios(url);

        setNotices(data.articles);
        setTotalNotice(data.totalResults)
      };

    useEffect(() => {
        consultApiCategory();
    }, [category])

    useEffect(() => {
        consultApiPage();
    }, [page])
    
    
    const handleChangeCategory = (e:SelectChangeEvent<string>) => {
        setCategory(e.target.value);
    };

    const handleChangePage = (e:any, value:number) => {
        setPage(value);
    };

    return (
        <NewsContext.Provider
            value={{
                category,
                handleChangeCategory,
                notices,
                totalNotice,
                handleChangePage,
                page
            }}
        >
            {children}
        </NewsContext.Provider>
    )
};