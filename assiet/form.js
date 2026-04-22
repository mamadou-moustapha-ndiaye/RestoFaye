
//Formulaire
//const PRICE = 2500;
let PRICE = parseInt(document.getElementById('dish-price').textContent.replace(/\s/g, ''));
let qty = 1;

//-------Notre button pour passer une commande-----//
document.querySelectorAll('.btn-order').forEach(btn => {
    btn.addEventListener('click', function(){
        const nom =  this.dataset.nom;
        const prix = parseInt(this.dataset.prix);
        const img =  this.dataset.img;

        document.getElementById('dish-img').src = img;
        document.getElementById('dish-img').alt = nom;
        document.getElementById('dish-nom').textContent = nom;
        document.getElementById('dish-price').textContent = prix.toLocaleString('fr-SN') + ' FCFA / Portion';

        PRICE = prix;
        qty = 1;
        document.getElementById('qty').textContent = qty;
        document.getElementById('recapQty').textContent = qty;
        document.getElementById('recapTotal').textContent = prix.toLocaleString('fr-SN') + ' FCFA';
       
        document.querySelector('.cmd').scrollIntoView({ behavior: 'smooth'});
     });
  });
//-------Quantité-----//
function changeQty(d) {
    qty = Math.max(1, qty + d);
    document.getElementById('qty').textContent = qty;
    document.getElementById('recapQty').textContent = qty;
    document.getElementById('recapTotal').textContent = (qty * PRICE).
    toLocaleString('fr-SN') + 'FCFA';
}

//Affichage du champ adresse
document.querySelectorAll('input[name="type-cmd"]').forEach(radio => {
    radio.addEventListener('change', function () {
        const isLivraison = this.value === 'livraison';
        const block = document.querySelector('.adresse-field');
        const input = document.getElementById('adresse');

        block.classList.toggle('visible', isLivraison);
        input.required = isLivraison;

        if(!isLivraison) {
            input.value = '';
            input.classList.remove('is-invalid');
        }
    });
});

//Validation d'un champ

function validateField(input) {
    const ok = input.checkValidity() && input.value.trim() !== '';
    const errorMsg = input.nextElementSibling;

    if (ok) {
        errorMsg.style.display = 'none';
    } else {
        errorMsg.style.display = 'block';
    }

    return ok;
}

// Message de Confirmation 

  function showToast(msg){
    const t = document.getElementById('msg-valid');
          t.textContent = msg;
          t.classList.add('show');
          setTimeout(() => t.classList.remove('show'), 3000);
  }
// Soumission 
document.getElementById('comForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let valid = true;

    //champs de texte 
    ['prenom', 'nom', 'tel'].forEach(id => {
        if(!validateField(document.getElementById(id))) valid = false;
    })


//Type de Commande
const typeCmd = document.querySelector('input[name="type-cmd"]:checked');
   if (!typeCmd) {
    valid = false;
    document.getElementById('type-grp').style.outline = '2px solid red';
   } else {
    document.getElementById('type-grp').style.outline = '';
   }

   //paiement
   const paiement = document.querySelector('input[name="paiement"]:checked');
   if (!paiement) {
       valid = false;
       document.getElementById('paiement-grp').style.outline = '2px solid red';
   }  else {
    document.getElementById('paiement-grp').style.outline = '';
   }

   //Adresse si livraison
    if(typeCmd && typeCmd.value === 'livraison') {
        if (!validateField(document.getElementById('adresse'))) valid = false;
    }

    if (!valid) return;

      //Message de Validation
       showToast('✅ Commande envoyé avec succès !');       
    });
     //Validation
     ['prenom', 'nom', 'tel', 'adresse'].forEach(id => {
        document.getElementById(id).addEventListener('input', function (){
            validateField(this);
        });

     });

     //Pour la table de reservation 
   
  // Voir / cacher le mot de passe
  function togglePw(inputId, btn) {
    const input = document.getElementById(inputId);
    const isPassword = input.type === 'password';
    input.type = isPassword ? 'text' : 'password';
    btn.innerHTML = isPassword
      ? '<i class="bi bi-eye-slash"></i>'
      : '<i class="bi bi-eye"></i>';
  }

  // Validation Bootstrap à la soumission
  document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    if (!this.checkValidity()) {
      this.classList.add('was-validated'); // ✅ Bootstrap active les messages d'erreur
    } else {
      alert('Connexion réussie !');
    }
  });

  document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    if (!this.checkValidity()) {
      this.classList.add('was-validated');
    } else {
      alert('Compte créé avec succès !');
    }
  });

     