import {FormControl, InputLabel, Select, MenuItem} from '@mui/material'
import { categories, ICategory } from '../utils/categories'
import { useNews } from '../hooks/useNews';

export const Form = () => {

    const {category, handleChangeCategory} = useNews();

  return (
    <form>
        <FormControl fullWidth>
            <InputLabel>Categoria</InputLabel>
            <Select
                label='Categoria'
                value={category}
                onChange={handleChangeCategory}
            >
                {categories.map( ({label, value}:ICategory) => (
                        <MenuItem 
                            key={value}
                            value={value}
                     
                        > {label} 
                        </MenuItem>
                    ))}
            </Select>
     
        </FormControl>
    </form>
  )
}
