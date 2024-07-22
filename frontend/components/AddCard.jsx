import { memo, useEffect, useState } from "react";

export const AddCard = memo(()=>{
    const [name,setName] = useState('')
    const [description,setDescription] = useState('')
    const [interest,setInterest] = useState({})
    return(
        <div>
            <h3>Enter the card details</h3>
            <input type="text" placeholder="name" onChange={(e)=>{
                setName(e.target.value)
            }}/>
            <br />
            <input type="text" placeholder="description" onChange={(e)=>{
                setDescription(e.target.value)
            }} />
            <br />
            <input type="text" placeholder="interests(seperate by comma (,))" onChange={(e)=>{
                const ints = (e.target.value).split(',')
                const obj = {
                    1:ints[0],
                    2:ints[1],
                    3:ints[2],
                    4:ints[3]
                }
                setInterest(obj)
            }} />
            <br />
            <button onInput={()=>{
                useEffect(()=>{
                    fetch("http://localhost:3000/card",{
                    method : 'POST',
                    body: JSON.stringify({
                        name : name,
                        description : description,
                        interests : interest
                    }),
                    headers : {"Content-type" : "application/json",
                        username : "gulabiSher",
                        password : "2ONEZA2!"
                    }

                }).then(async(res)=>{
                    const json = await res.json()
                    alert(json.msg)
                })
                })
                
            }}>add card</button>
            <button onInput={()=>{
                useEffect(()=>{
                    fetch("http://localhost:3000/delete-card",{
                    method : 'DELETE',
                    body: JSON.stringify({
                        name : name,
                        description : description,
                        interests : interest
                    }),
                    headers : {"Content-type" : "application/json",
                        username : "gulabiSher",
                        password : "2ONEZA2!"
                    }
                }).then(async(res)=>{
                    const json = await res.json()
                    alert(json.msg)
                })
                })
                
            }}>delete card</button>
            <button onInput={()=>{
                useEffect(()=>{
                  fetch("http://localhost:3000/update-card",{
                    method : 'PUT',
                    body: JSON.stringify({
                        name : name,
                        description : description,
                        interests : interest
                    }),
                    headers : {"Content-type" : "application/json",
                        username : "gulabiSher",
                        password : "2ONEZA2!"
                    }

                }).then(async(res)=>{
                    const json = await res.json()
                    alert(json.msg)
                })
                },[])
     
            }}>update card</button>
        </div>
    )
})