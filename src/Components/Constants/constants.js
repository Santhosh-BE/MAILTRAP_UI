export const queryString = ({params}) => {return Object.keys(params).map(key => key + '=' + params[key]).join('&')};

export const sidebarlabel=["MailTrap","Inbox","Trash"];

export const LABEL={
    SELECT:"Select an item to read",
    NOTHING:"Nothing is selected"
}