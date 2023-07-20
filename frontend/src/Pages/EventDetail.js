import { useRouteLoaderData,json,redirect} from "react-router-dom";
import EventItem from '../components/EventItem';

const EventDetail=()=>{
    const data=useRouteLoaderData('event-detail');
    
    return(
        <EventItem event={data.event}/>
    );
}
export default EventDetail;
export async function loader({request,params}){
    const id=params.eventId;                 
    const response = await fetch('http://localhost:8080/events/' + id);

    if (!response.ok) {
      return json(
        {message:'could not fetch events for selected event'},
        {status:500}
      );
    } else {
      return response              
}
};

export async function action ({request,params}) {
  const eventId=params.eventId;  

  const response=await fetch('http://localhost:8080/events'+eventId,{
    method:request.method,
  })

   if(!response.ok){
       throw json({message:'could not delete'},{staus:500})
   }
   return redirect('/events');

};