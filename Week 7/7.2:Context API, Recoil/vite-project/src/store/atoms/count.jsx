import { atom, selector } from "recoil";
export const countAtom = atom({
  key: "countAtom",
  default: 0,
});

export const evenSelector= selector({
    key:"evenSelector",
    get:((props)=>{
        const count = props.get(countAtom);
        return count%2;
    })
})

export const todosAtom = atom({
    key: "todosAtom",
    default: []
  });

export const filterAtom = atom({
    key: "filterAtom",
    default: ""
  });

export const filterSelector = selector({
    key:"filterSelector",
    get:(({get})=>{
        const todos = get(todosAtom);
        const filter = get(filterAtom);
        const filteredTodos=todos.filter(x=> x.title.includes(filter) || x.description.includes(filter));
        return filteredTodos;
    })
})
