    post=[];
    let userlastactivitytime=null;

    async function delay(wait){
        return new Promise(resolve =>setTimeout(resolve,wait));
    }

    function updateLastUserActivityTime(){
        return new Promise(async(resolve)=>{
            await delay(1000);
            post.push({title: 'Post7'});
             userlastactivitytime= new Date().toISOString();
            resolve(userlastactivitytime);
            
        });
    }

    async function createapost(){
        await updateLastUserActivityTime();
        await delay(1000);
        post.push({title: 'Post1'});
    }

    async function deletepost(){
    await delay(1000);
    
    if(post.length>0){
        const poppedelement=post.pop();
    return poppedelement;
    }
    else{
        console.log('ERROR');
    }
    }

    async function run(){

        try{
            await updateLastUserActivityTime();
            await createapost();


            console.log(post);
            console.log('USERLASTACTIVITY TIME  :- '+userlastactivitytime);

            // const del=await deletepost();
            await deletepost();
            console.log(post);
        }
        catch(err){
            console.log(err);
        }
    }
    run();