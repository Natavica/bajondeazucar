const productos = [
  {
    id: 1,
    nombre: "Brownie de chocolate",
    categoria: "dulce",
    imagen: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1000&q=85",
    descripcion: "Brownie húmedo y profundamente chocolatoso, con una superficie ligeramente crocante y centro suave.",
    ingredientes: "Chocolate, cacao, harina, azúcar, aceite vegetal",
    formato: "Porción · caja de 6 · caja de 12",
    precio: "Desde $8.500",
    pedido: true
  },
  {
    id: 2,
    nombre: "Cupcakes de vainilla",
    categoria: "dulce",
    imagen: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=1000&q=85",
    descripcion: "Bizcocho suave de vainilla con frosting cremoso y decoración personalizada.",
    ingredientes: "Harina, vainilla, azúcar, bebida vegetal, aceite",
    formato: "Caja de 6 · caja de 12",
    precio: "Desde $12.000",
    pedido: true
  },
  {
    id: 3,
    nombre: "Torta chocolate & frutos rojos",
    categoria: "dulce",
    imagen: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85",
    descripcion: "Capas de bizcocho de chocolate, crema vegetal y frutos rojos. Una de las favoritas para celebraciones.",
    ingredientes: "Cacao, chocolate, harina, crema vegetal, frutos rojos",
    formato: "10 · 15 · 20 porciones",
    precio: "Desde $28.000",
    pedido: true
  },
  {
    id: 4,
    nombre: "Mini quiche de verduras",
    categoria: "salado",
    imagen: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=85",
    descripcion: "Bocados salados individuales, ideales para coffee breaks, cumpleaños y celebraciones.",
    ingredientes: "Harina, tofu, verduras de temporada, especias",
    formato: "Bandeja de 12 · 24 · 48 unidades",
    precio: "Desde $18.000",
    pedido: true
  },
  {
    id: 5,
    nombre: "Rollitos de canela",
    categoria: "dulce",
    imagen: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=1000&q=85",
    descripcion: "Masa esponjosa, canela y glaseado. Perfectos para acompañar café o regalar.",
    ingredientes: "Harina, canela, azúcar, bebida vegetal, margarina vegetal",
    formato: "Individual · caja de 6 · caja de 12",
    precio: "Desde $10.000",
    pedido: false
  },
  {
    id: 6,
    nombre: "Mesa dulce para eventos",
    categoria: "catering",
    imagen: "https://images.unsplash.com/photo-1558326567-98ae2405596b?auto=format&fit=crop&w=1000&q=85",
    descripcion: "Selección personalizada de mini postres, brownies, cupcakes y otras preparaciones para tu evento.",
    ingredientes: "Selección según propuesta",
    formato: "Desde 20 personas",
    precio: "Cotizar",
    pedido: true
  },
  {
    id: 7,
    nombre: "Cheesecake de limón",
    categoria: "dulce",
    imagen: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1000&q=85",
    descripcion: "Base crocante y relleno cremoso de limón con un toque fresco y ácido.",
    ingredientes: "Galleta, castañas, limón, azúcar, crema vegetal",
    formato: "6 · 10 · 15 porciones",
    precio: "Desde $22.000",
    pedido: true
  },
  {
    id: 8,
    nombre: "Box brunch vegano",
    categoria: "catering",
    imagen: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1000&q=85",
    descripcion: "Una caja pensada para compartir: preparaciones dulces, saladas y una bebida para acompañar.",
    ingredientes: "Selección según disponibilidad",
    formato: "Individual · 2 personas · 4 personas",
    precio: "Desde $15.000",
    pedido: false
  },
  {
    id: 9,
    nombre: "Torta personalizada",
    categoria: "pedido",
    imagen: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=1000&q=85",
    descripcion: "Diseñamos una torta especialmente para tu celebración, considerando colores, temática, sabores y tamaño.",
    ingredientes: "Según sabor y propuesta",
    formato: "A definir",
    precio: "Cotizar",
    pedido: true
  }
];
