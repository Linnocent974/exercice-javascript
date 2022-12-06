//Objet literal
let utilisateur = {
    nom : 'bobi',
    age : 25,
    email : 'bobi@gmail.com',
    location : 'DR Congo',
    blogs : [
        {
         titre : 'javascript pour débutants',
         likes : 30
    },
    {
        titre : 'kotlin pour débutants',
        likes : 70 
    }

    ],
    afficherBlogs(){
        console.log('cet utilisateur a ecrit ces blogs : ');
        this.blogs.forEach(blog => {
            console.log(blog.titre, blog.likes);
        })
    }
};

//Affichage d'un objet
console.log(utilisateur);

//Affichage d'un attribut d'un object
console.log(utilisateur.nom);

//Réaffectation d' une valeur à un attribut
console.log((utilisateur.nom = 'couti'));

//Une autre maniére d'afficher un object
console.log(utilisateur['nom']);
console.log(utilisateur['email'] = 'couti@gmail.com');
console.log(typeof utilisateur);
console.log(utilisateur.afficherBlogs());