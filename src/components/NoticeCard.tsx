import { FC } from "react"
import { Card, CardActions, CardContent, CardMedia, Grid, Link, Typography } from "@mui/material";
import { Article } from "../interfaces/NewsResponse";
import noPhoto from '/noPhoto.jpg'

interface Props{
    notice: Article;
}

export const NoticeCard:FC<Props> = ({notice}) => {

    const {urlToImage, url, title, description, source} = notice;

  return (
    <Grid item md={6} lg={4}>
        <Card>
            
                   <CardMedia 
                   component={'img'}
                   alt={`${title}`}
                   image={urlToImage ? urlToImage : noPhoto}
                   height='250px'
               />
          
            <CardContent>
                <Typography 
                    variant="body1"
                    color={'error'}
                >
                    {source.name}
                </Typography>
                <Typography 
                    variant="h5"
                    component={'div'}
                >
                    {title}
                </Typography>
                <Typography 
                    variant="body2"
                >
                    {description}
                </Typography>
            </CardContent>

            <CardActions>
                <Link  
                    href={url}
                    target='_blank'
                    variant="button"
                    width={'100%'}
                    textAlign='center'
                    underline="none"
                    color='secondary'
                >
                    Leer noticia
                </Link>
            </CardActions>
        </Card>
    </Grid>
  )
}
