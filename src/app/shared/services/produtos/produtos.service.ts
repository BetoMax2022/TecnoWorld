import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Classificacao, Produto } from 'src/app/models/produto';


@Injectable({
  providedIn: 'root'
})


export class ProdutosService {

  produtos: Produto[] = [{
    imagem: "https://img.terabyteshop.com.br/produto/g/gabinete-gamer-kwg-vela-m2-mid-tower-black-s-fonte_86515.jpg",
    descricao: "PC Gamer T-MOBA Python AMD Ryzen 5 PRO 4650GE / AMD Radeon RX 550 4GB / DDR4 8GB / SSD 120GB",
    avaliacao: 5.0,
    id: 154868,
    preco: 4214.01,
    desconto: 0.0575,
    classificacao: Classificacao.HARDWARE
  },

  {
    imagem: "https://img.terabyteshop.com.br/produto/g/headset-hyperx-cloud-ii-kingston-red-khx-hscp-rd_24084.png",
    descricao: "Headset Gamer HyperX Cloud II, Som Surround 7.1, Drivers 53mm, USB e P3, Preto e Vermelho, KHX-HSCP-RD",
    avaliacao: 4.7,
    id: 1587,
    preco: 350.57,
    desconto: 0.075,
    classificacao: Classificacao.ACESSORIOS
  },

  {
    imagem: "https://img.terabyteshop.com.br/produto/g/gabinete-gamer-kwg-vela-m2-mid-tower-black-s-fonte_86515.jpg",
    descricao: "PC Gamer T-MOBA Python AMD Ryzen 5 PRO 4650GE / AMD Radeon RX 550 4GB / DDR4 8GB / SSD 120GB",
    avaliacao: 5.0,
    id: 1547,
    preco: 1020.35,
    desconto: 0.13,
    classificacao: Classificacao.HARDWARE
  },

  {
    imagem: "https://img.terabyteshop.com.br/produto/g/suporte-para-gpu-vertical-lian-li-o11de-2-x-com-riser-para-placa-de-video-exclusivo-para-011d-evo-black_140132.jpg",
    descricao: "Suporte para GPU Vertical Lian Li O11DE-2X com Riser para Placa de Vídeo, Exclusivo para 011D EVO, Black",
    avaliacao: 4.7,
    id: 156,
    preco: 654.01,
    desconto: 0.15,
    classificacao: Classificacao.ACESSORIOS
  },

  {
    imagem: "https://img.terabyteshop.com.br/produto/g/placa-de-video-gigabyte-geforce-rtx-2060-d6-6gb-gddr6-dlss-ray-tracing-gv-n2060d6-6gd_135779.jpg",
    descricao: "Placa de Vídeo Gigabyte Geforce RTX 2060, 6GB GDDR6, DLSS, Ray Tracing, GV-N2060D6-6GD",
    avaliacao: 4.8,
    id: 1236,
    preco: 4146.90,
    desconto: 0.13,
    classificacao: Classificacao.HARDWARE
    },

    {
      imagem: "https://img.terabyteshop.com.br/produto/g/windows-10-pro-3264bits-oem-portugues-brasil-0885370920956_138304.jpg",
      descricao: "Windows 10 Pro, 32/64Bits, OEM, Português Brasil",
      avaliacao: 5.0,
      id: 88,
      preco: 542.65,
      desconto: 0.13,
      classificacao: Classificacao.SOFTWARE
    },
    {
      imagem: "https://img.terabyteshop.com.br/produto/g/suporte-para-gpu-vertical-lian-li-o11de-2-x-com-riser-para-placa-de-video-exclusivo-para-011d-evo-black_140132.jpg",
      descricao: "Suporte para GPU Vertical Lian Li O11DE-2X com Riser para Placa de Vídeo, Exclusivo para 011D EVO, Black",
      avaliacao: 4.7,
      id: 256,
      preco: 654.01,
      desconto: 0.15,
      classificacao: Classificacao.ACESSORIOS
    },

    {
      imagem: "https://img.terabyteshop.com.br/produto/g/placa-de-video-gigabyte-geforce-rtx-2060-d6-6gb-gddr6-dlss-ray-tracing-gv-n2060d6-6gd_135779.jpg",
      descricao: "Placa de Vídeo Gigabyte Geforce RTX 2060, 6GB GDDR6, DLSS, Ray Tracing, GV-N2060D6-6GD",
      avaliacao: 4.8,
      id: 568,
      preco: 4146.90,
      desconto: 0.13,
      classificacao: Classificacao.HARDWARE
      },

      {
        imagem: "https://img.terabyteshop.com.br/produto/g/windows-10-pro-3264bits-oem-portugues-brasil-0885370920956_138304.jpg",
        descricao: "Windows 10 Pro, 32/64Bits, OEM, Português Brasil",
        avaliacao: 5.0,
        id: 1568,
        preco: 542.65,
        desconto: 0.13,
        classificacao: Classificacao.SOFTWARE
      }
  ];


//  constructor(private router: Router) { }

  // onSelect(id: number){
  //  this.router.navigate(['/produtos', id])
  // }

}
