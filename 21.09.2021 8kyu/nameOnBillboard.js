function billboard(name, price = 30) {
  const answer = Math.log(name.length) + Math.log(price);
  return Math.round(Math.exp(answer));
}

billboard(dkhdmitriy, 30);
