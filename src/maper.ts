
type typeForObj = {[a:string]: {b:any}};
type funcType = (a:any)=> any;

function mapObject<TypeInObj,OutputType>(
    obj: {[objKey:string]: TypeInObj}, 
    func: (funcArg:TypeInObj)=> OutputType
    ):{ [key: string]: OutputType }
    {

    const newObj:{ [key: string]: OutputType } = {} 

    Object.keys(obj).forEach( key =>{
        const before = obj[key];
        const after = func(before)
        newObj[key] = after;
    })

    return newObj;
}

const testObj = { "roma" : 5, "vasya": 2 }
const testFunc = (x:number) => x > 2;

console.log(mapObject(testObj,testFunc))