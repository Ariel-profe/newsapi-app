import { Grid, Pagination, Stack, Typography } from "@mui/material";
import { useNews } from "../hooks/useNews";
import { Article } from '../interfaces/NewsResponse';
import { NoticeCard } from "./NoticeCard";

export const NewsList = () => {

    const {notices, totalNotice, handleChangePage,page} = useNews();

    const totalPages = Math.ceil(totalNotice / 20);

  return (
    <>
        <Typography
            textAlign={'center'}
            marginY={5}
            variant={'h3'}
            component={'h2'}
        > Últimas noticias
        </Typography>

        <Grid
            container
            spacing={2}
        >
            {
                notices?.map( (notice:Article) => (
                    <NoticeCard
                        key={notice.url}
                        notice={notice} 
                    />
                ))
            }
        </Grid>

        <Stack 
            spacing={2}
            direction={'row'}
            justifyContent='center'
            alignItems={'center'}
            my={5}
        >
            <Pagination 
                count={totalPages} 
                color="secondary"
                onChange={handleChangePage}
                page={page}
            />
        </Stack>
    </>
  )
}
