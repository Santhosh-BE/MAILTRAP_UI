export const queryString = ({params}) => {return Object.keys(params).map(key => key + '=' + params[key]).join('&')};

export const sidebarlabel=["MailTrap","Inbox","Trash"];