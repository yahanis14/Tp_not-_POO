# QCM : JavaScript, DOM, API et TypeScript

> Une seule bonne réponse par question. Écrire la lettre choisie (A, B ou C) après **Réponse :**.

---

**1. Qu'est-ce qui permet de sélectionner un élément du DOM ?**

- A. `localStorage.getItem()`
- B. `document.querySelector()`
- C. `JSON.parse()`

**Réponse : B** 

---

**2. Qu'est-ce qu'une API ?**

- A. Une base de données qui stocke les informations d'un site
- B. Une bibliothèque JavaScript qui sert à manipuler le DOM
- C. Un ensemble de règles qui permet à deux logiciels de communiquer entre eux

**Réponse :C** 

---

**3. Qu'est-ce qu'une condition ?**

- A. Une structure qui exécute du code seulement si une expression est vraie
- B. Une structure qui répète un bloc de code tant qu'une expression est vraie
- C. Une variable qui ne peut contenir qu'un booléen

**Réponse :A** 

---

**4. Que renvoie `5 === "5"` ?**

- A. `true`, car les deux valeurs valent 5
- B. `false`, car les types sont différents
- C. Une erreur

**Réponse :B** 

---

**5. Quelle est la différence entre `let` et `const` ?**

- A. `let` est limitée à une fonction, `const` est globale
- B. Il n'y a aucune différence
- C. `const` ne peut pas être réaffectée, `let` peut l'être

**Réponse :A** 

---

**6. À quoi sert `event.preventDefault()` ?**

- A. À empêcher le comportement par défaut du navigateur lié à un événement
- B. À supprimer l'écouteur d'événement de l'élément
- C. À empêcher l'événement de se déclencher une seconde fois

**Réponse :A** 

---

**7. Avec l'interface suivante, quel objet est invalide ?**

```ts
interface Pokemon {
  name: string;
  level: number;
  nickname?: string;
}
```

- A. `const pikachu: Pokemon = { name: "Pikachu", level: 12 };`
- B. `const pikachu: Pokemon = { name: "Pikachu", nickname: "Pika" };`
- C. `const pikachu: Pokemon = { name: "Pikachu", level: 12, nickname: "Pika" };`

**Réponse :B** 

---

**8. Dans le code suivant, que contient `pokemon` ?**

```ts
const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
const pokemon = await response.json();
```

- A. Le code HTTP de la réponse (par exemple 200)
- B. Une `Promise` pas encore résolue
- C. Un objet JavaScript construit à partir du JSON renvoyé par l'API

**Réponse :C** 

---

**9. `fetch` reçoit une réponse 404. Que se passe-t-il ?**

- A. `fetch` ne lève pas d'erreur : il faut vérifier `response.ok` soi-même
- B. `fetch` lève automatiquement une erreur
- C. La page est rechargée

**Réponse :A** 

---

**10. Quel est l'intérêt principal de TypeScript par rapport à JavaScript ?**

- A. Il rend le code plus rapide dans le navigateur
- B. Il détecte des erreurs de type avant l'exécution du code
- C. Le navigateur détecte les erreurs lors de l'exécution du code

**Réponse :B** 
