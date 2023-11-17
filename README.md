# Modal Component

## Introduction

Ce composant `Modal` est un composant React simple et réutilisable qui permet d'afficher une fenêtre modale dans votre application.

## Installation

Pour installer ce composant, utilisez la commande suivante :

`npm install react-modal-jarod41`

```
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="App">
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <h1>Hello, World!</h1>
      </Modal>
    </div>
  );
}

export default App;
```

## Props

Le composant `Modal` accepte les props suivantes :

- `isOpen` (booléen) : Détermine si la fenêtre modale doit être affichée ou non.
- `onClose` (fonction) : Fonction à exécuter lorsque l'utilisateur ferme la fenêtre modale.
- `children` (nœud) : Le contenu à afficher dans la fenêtre modale.

## Conclusion

Le composant `Modal` est un excellent moyen de rendre votre code plus propre et plus organisé. N'hésitez pas à l'essayer dans votre prochain projet React !

#React #Modal #NPM