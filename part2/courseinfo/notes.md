Al mapear un array con .map hay que pasar una parte del  objeto como llave/id o superponer un index y el otro objeto en su totalidad , recordar que la propiedad {key} es obligatoria.
asi:
{parts.map((part) => <Part key={part.id} part={part} />)}

