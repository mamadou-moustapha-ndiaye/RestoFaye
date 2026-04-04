
//Formulaire
const PRICE = 2500;
let qty = 1;

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
     