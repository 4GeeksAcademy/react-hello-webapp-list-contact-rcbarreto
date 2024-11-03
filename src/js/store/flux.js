const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			
			contacts: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			getContacts: async () => {

				const resp = await fetch(process.env.BACKEND_URL+"agendas/rcbarreto");
				const data = await resp.json();
				setStore({contacts: data.contacts});

			},

			createContact: async (contact)=>{

				const myHeaders = new Headers();
				myHeaders.append("Content-Type","application/json");
				const resp = await fetch(process.env.BACKEND_URL+"agendas/rcbarreto/contacts", {
					method: 'POST',
					headers: myHeaders,
					body: JSON.stringify(contact)
				});
				
				if(resp.ok){
					
					await getActions().getContacts()
				}

			},

			deleteContact: async (contactID)=>{

				
				const myHeaders = new Headers();
				myHeaders.append("Content-Type","application/json");
				const resp = await fetch(process.env.BACKEND_URL+"agendas/rcbarreto/contacts/"+ contactID , {
					method: 'DELETE',
					
				});
				
				if(resp.ok){
					
					await getActions().getContacts()
				}

			}
		}
	};
};

export default getState;
