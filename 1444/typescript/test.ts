interface Monarch {
  isEmperor: boolean;
}

type Feodal = {
  isEmperor: boolean;
  isKing: boolean;
  isPrince: boolean;
  isDuke: boolean;
};

function Monachy(user: Monarch) {
  console.log(user);
}

const Russia: Feodal = {
  isEmperor: true,
  isKing: true,
  isPrince: true,
  isDuke: true,
};

const Prussia: Feodal = {
  isEmperor: false,
  isKing: true,
  isPrince: true,
  isDuke: true,
};

Monachy(Prussia);
