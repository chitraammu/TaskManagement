export type State ={
    backlogData:backlogData[];
    saveTicketId:number;
}

interface backlogData {
    title: string,
    description:string ,
    storypoints:string,
    tag:string,
    id:number,
    assignee:string,
    profileUrl:string,
    ticketNo:string,
    createDate:string,
    label:string,
    epic:string,
    version:string,
    isChecked:boolean
   }