import { createRouter, createWebHashHistory } from 'vue-router';
import InicioView from "../views/InicioView.vue"

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: InicioView
  },
  {
    path: "/conta",
    name: "conta",
    component: () => import("../views/AccountView.vue")
  },
  {
    path: "/portifolio/criar",
    name: "portifolio/criar",
    component: () => import("../views/NovoView.vue")
  },
    {
    path: "/portifolio/editar/:id",
    name: "portifolio/editar",
    component: () => import("../views/EditarPortifolioView.vue")
  },
  {
    path: "/portifolio/:id",
    name: "portifolio",
    component: () => import("@/views/PortifolioView.vue")
  },
  {
    path: "/perfil",
    name: "perfil",
    component: () => import("../views/PerfilView.vue")
  },
  {
    path: "/portifolios",
    name: "portifolios",
    component: () => import("../views/PortifoliosView.vue")
  },
  {
    path: "/usuario/portifolio/:id",
    name: "portifolio",
    component: () => import("../views/UsuarioPortifolioView")
  },
  {
    path: "/sobre",
    name: "sobre",
    component: () => import("../views/SobreView.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


export default router
