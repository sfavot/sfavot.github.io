function mail(form) {
  console.log(form)
  const name = form.name.value;
  const response = form.response.value;
  const nbGuests = form.nbGuests.value;
  const message = form.message.value;

  if (response === "yes") {
    document.getElementById('nb-guests-field').classList.toggle('hidden', false);
    document.querySelector('#nb-guests-field input').required = true;
  } else {
    document.getElementById('nb-guests-field').classList.toggle('hidden', true);
    document.querySelector('#nb-guests-field input').removeAttribute('required');
  }

  if (name && name !== '' && response && (response == 'no' || (nbGuests && nbGuests !== ''))) {
    document.getElementById('submit-rsvp').classList.toggle('disabled', false);
  } else {
    document.getElementById('submit-rsvp').classList.toggle('disabled', true);
    return;
  }

  let mailto = "mailto:bapteme-rose@tchobli.fr?subject=Confirmation de présence&body=";
  mailto += "Bonjour,%0D%0A%0D%0A";

  if (response === "yes") {
    mailto += `Nous serons bien présents au baptême de Rose (${nbGuests && nbGuests > 0 ? nbGuests : 1} personne${nbGuests > 1 ? 's' : ''}).%0D%0A%0D%0A`;
  } else {
    mailto += "Nous ne pourrons malheureusement pas être présents au baptême de Rose.%0D%0A%0D%0A";
  }

  if (message && message !== '') {
    mailto += `${message}%0D%0A%0D%0A`;
  }

  mailto += "A bientôt !%0D%0A%0D%0A";
  mailto += name;
  document.getElementById('submit-rsvp').href = mailto;
}