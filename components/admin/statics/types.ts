export type Table = {
    title: string;
    tableRows: Array<string>;
    tableCols?: Array<object>;
    dataKeys?: Array<string>;
    hasImage?: boolean;
    parseOn?: number;
    hasPopUp?:boolean;
    setShowPopUp?:React.Dispatch<React.SetStateAction<boolean>>;
    setSelectedData?:React.Dispatch<React.SetStateAction<any>>;
    updateDestination?:string
    eye?:boolean
  }