// Si les composants ont le même nom, on peut les renommer à l'import grâce au "as"
import { Message as MessageUI } from 'semantic-ui-react';

// Pour définir une propriété, je vais d'abord définir un contract / un type
// Le but de ce contrat est de représenter la forme de l'objet que je vais passer en propriété
// La forme => un object avec une certaine propriété devant avoir comme valeur une chaine de caractères

// Particularité des props de React, c'est un objet qui contiendra une liste de propriétés
// Un type n'est pas forcément un objet. On pouvait aussi choir "interface" mais cela obligerait à ce que ça soit un objet
type MessageProps = {
  message: string;
};

// Je positionne le contrat sur le 1er paramètre
// Grâce au { message } : je pioche dans les props, la propriété message
function Message({ message }: MessageProps) {
  return <MessageUI>{message}</MessageUI>;
}

export default Message;
