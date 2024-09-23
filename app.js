const {createApp} = Vue;

createApp({
	data() {

		return {
			// Array de produits
			products:[],

			// Index du produit en cours de modification
			editingIndex: null,

			// Données du produit 
			newProduct:{
				name:'',
				price:'',
				quantity:'',
				category:'category1',
			},

			// Afficher ou masquer le modal
			isModalVisible: false,

		};		
	},

	methods: {
		
		// méthode pour ajouter un produit
		addProducts()
		{
			// Convertir le prix et la quantité en nombre
			const price = Number(this.newProduct.price);
			const quantity = Number(this.newProduct.quantity);

			// Vérifier si les champs sont remplis
			if (this.newProduct.name && price > 0 &&  quantity > 0)
			{

				// Ajouter le produit dans le tableau
				this.products.push({...this.newProduct, price: price, quantity: quantity});				
				alert('Produit ajouté avec succès');

				// Réinitialiser les champs du formulaire
				this.resetForm();
			}
			else
			{
				alert('Veuillez remplir tous les champs');
			}
		},
		
		//methode pour enregistrer les modifications
		updateProduct()
		{
			const price = Number(this.newProduct.price);
			const quantity = Number(this.newProduct.quantity);

			if(this.newProduct.name && price > 0 && quantity > 0)
			{
				//C'est exactement la même chose que la méthode addProducts, on écrase simplement les données précédentes par de nouvelles
				this.products[this.editingIndex] = {...this.newProduct, price, quantity};
				alert('Produit modifié avec succès');

				this.resetForm();
				this.closeModal();

			}
			else
			{
				alert('Veuillez remplir tous les champs');
			}
		},

		// méthode pour supprimer un produit
		closeModal()
		{
			this.isModalVisible = false;
		},

		// reinitialiser les champs du formulaire après l'ajout ou la modification
		resetForm()
		{
			this.newProduct = {
				name:'',
				price:'',
				quantity:'',
				category:'category1',
			};
			this.editingIndex = null;
		},

		// methode pour modifier / mettre à jour le produit
		editProduct(index)
		{
			alert('Vous avez cliqué sur le bouton modifier');
			const product = this.products[index];
			this.newProduct = {...product}; // copier les données du produit dans le formulaire
			this.editingIndex = index; // enregistrer l'index du produit en cours de modification
			this.isModalVisible = true; // afficher le modal
		},

		//la méthode pour supprimer un produit est d'une simplicité enfantine
		deleteProduct(index) 
		{
			if(confirm('Voulez-vous vraiment supprimer ce produit ?'))
			{
				this.products.splice(index, 1);
				alert('Produit supprimé avec succès');
			}
		}

	},
	
}).mount('#app');