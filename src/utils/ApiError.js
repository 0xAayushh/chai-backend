class apiError extends Error{
    constructor
    (
        statusCode,
        message="something went wrong",
        statck = ""
    ){
        super(message)
        this.statusCode=statusCode
        this.data=null
        this.message
        this.success=false;
        this.errors=this.errors

        if(statck){
            this.stack=statck
        }
        else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}

export {apiError}
