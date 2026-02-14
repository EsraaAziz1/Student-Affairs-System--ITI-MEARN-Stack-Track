
export default function searching_using_anyColumn(inst_of_Obi) {
    let search = document.querySelector('#search_data');
   let EntityTable = document.querySelector(".EntityTable");
   
    search.addEventListener('input', function () {
        // debugger
        // if(dataSearch === '' || dataSearch )
        
        let input = document.querySelector('input')
        let dataSearch = input.value.toLowerCase();
        console.log(dataSearch)
        let search_data =inst_of_Obi.filter((instance) => {
            return checkSearch(instance);
        })
        EntityTable.innerHTML=''
        for (let index = 0; index < search_data.length; index++) {
            EntityTable.innerHTML=`
               <div class="content">
                        <p>${search_data[index].id}</p>
                        <p>${search_data[index].name}</p>
                        <p>${search_data[index].role}</p>
                        <input type="button" value="Edit" 
                            style=" background-color: #05498d; color: white; border: none; border-radius: 3px;">
                        <input type="button" value="Delete"
                            style=" background-color: #042d3a;color: white; border: none; border-radius: 3px;">
                    </div>  
            `

        }
        console.log(search_data)
        function checkSearch(instance) {
            instance.name.toLowerCase().includes(dataSearch) ||
                instance.id.toLowerCase().includes(dataSearch) ||
                instance.department.toLowerCase().includes(dataSearch) ||
                instance.courses.toLowerCase().includes(dataSearch) ||
                instance.role.toLowerCase().includes(dataSearch) ||
                instance.department.toLowerCase().includes(dataSearch)
        }
    })

}
