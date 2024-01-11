import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import { useContext } from 'react';
import { cartContext } from '../Context';

export default function ToastCreated() {

  const { succ, setSucc } = useContext(cartContext);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setSucc(!succ);
    }, 6000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Box sx={{minWidth:'20rem', width: '35%', position:'fixed', bottom:'0', right:'0' }}>
      <Collapse in={succ}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setSucc(!succ);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2, fontSize:'1.1rem' }}
        >
            ¡Listo! El producto fue eliminado con exito!
        </Alert>
      </Collapse>
    </Box>
  );
}