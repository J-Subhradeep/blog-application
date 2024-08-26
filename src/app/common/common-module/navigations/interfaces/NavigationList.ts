export interface NavigationList<T>{
    title:string;
    icon: string;
    hasChildren:boolean;
    link?:string;
    children: Array<T> ;
}