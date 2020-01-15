import React from 'react'
import AppBar from './AppBar'
import { Redirect } from 'react-router';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Welcome = () => {
    
    const [page, setPage] = React.useState({pageName:"", props:{}});
    if (page === "List") {
        return <Redirect push to="/List" />
    }

    return (
        <React.Fragment>
            <AppBar/>
            Hello Welcome
            <Button 
                     onClick={()=>{
                        setPage('List')
                    }}>
                    <Typography style={{
                        fontSize: 13,
                    }}>
                        to List
                    </Typography>
                </Button>
        </React.Fragment>
    );
      
}
export default Welcome