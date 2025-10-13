const productos=[
    {id:1, nombre:"Pc Gamer", precio:100},
    {id:2, nombre:"Pantallas", precio:200},
    {id:3, nombre:"Teclado", precio:300},
    {id:4, nombre:"Mouse", precio:400},
    {id:5, nombre:"Camaras", precio:500},
    {id:6, nombre:"Impresoras", precio:600},
    {id:7, nombre:"Monitores", precio:700},
    {id:8, nombre:"Celulares", precio:800},
    {id:9, nombre:"Tablets", precio:900},
    {id:10, nombre:"Laptops", precio:1000}
]
export const getProducts=(req,res)=>{
    res.json(productos);
}

export const getProductById=(req,res)=>{
    const {id}=req.params;
    const product=productos.find(producto=>producto.id==id);
    res.json(product);
}

export const createProduct=(req,res)=>{
    const {id,nombre,precio}=req.body;
    const newProduct={id,nombre,precio};
    productos.push(newProduct);
    res.json(productos);
}
export const updateProduct=(req,res)=>{
    const {id}=req.params;
    const {nombre,precio}=req.body;
    const product=productos.find(producto=>producto.id==id);
    product.nombre=nombre;
    product.precio=precio;
    res.json(productos);
}
export const deleteProduct=(req,res)=>{
    const {id}=req.params;
    const index=productos.findIndex(producto=>producto.id==id);
    productos.splice(index,1);
    res.json(productos);
}
