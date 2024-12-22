class ApiErrors extends Error {
  constructor(message, status,errors,statck="") {
    super(message);
    this.status = status;
    this.errors = errors;
    this.success = false;
    this.data = null;
    if(statck){
        this.stack = statck;
    }
    else{
        Error.captureStackTrace(this, this.constructor);
    }
  }
}

models.exports = ApiErrors;