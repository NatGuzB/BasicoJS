// Establecimiento de función
function filtrarUsuarios(usuarios, edadMinima) {
  const usuariosFiltrados = [];

  for (let i = 0; i < usuarios.length; i++) {
    const usuario = usuarios[i];

    if (usuario.edad >= edadMinima) {
      usuariosFiltrados.push(usuario);
    }
  }

  console.log("Usuarios con ", edadMinima, " años o más:");
  for (let j = 0; j < usuariosFiltrados.length; j++) {
    const u = usuariosFiltrados[j];
    console.log("- ", u.nombre + " (", u.edad, " años)");
  }

  return usuariosFiltrados;
}

// Uso función
const usuarios = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 17 },
  { nombre: "María", edad: 32 },
  { nombre: "Carlos", edad: 18 }
];

// Impresión función
filtrarUsuarios(usuarios, 18);
