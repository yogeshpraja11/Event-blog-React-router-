import {useRouteError} from 'react-router-dom';
import PageContent from "../components/PageContent";
import MainNavigation from '../components/MainNavigation';

const Error=()=>{
    const error=useRouteError();

    let title='an error occured';
    let message='Something went wrong !';
    if(error.status===500){
      message=error.data.message;
    }
    if(error.status===404){
      title='Could not found';
      message='Could not find resource or page';
    }

   return ( 
      <> 
   <MainNavigation/>
   <PageContent title={title}>
    <p>{message}</p>
   </PageContent>
   </>);
};
export default Error;