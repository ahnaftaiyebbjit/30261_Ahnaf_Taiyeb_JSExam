// a
class ValidationError extends Error{
    constructor(field,name){
        super(field),
        this.name = name;
    }

    InstanceOf(obj){
        return obj instanceof ValidationError;
    }
}

class SlotUnavailableError extends Error{
        constructor(statusCode , slotId, nextAvailableAt, name){
        super(statusCode, slotId, nextAvailableAt),
        this.name = name;
    }

    InstanceOf(obj){
        return obj instanceof SlotUnavailableError;
    }
}

function bookAppointment(payload){
    try {
        fetch(payload);
    } catch (err){
        if(SlotUnavailableError.InstanceOf(err)){
            
        }
    }
}