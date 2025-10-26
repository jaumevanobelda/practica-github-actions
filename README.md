Example of nextjs project using Cypress.io

<!---Start place for the badge -->
[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)

<!---End place for the badge -->

RESULTAT DELS ÚLTIMS TESTS ![Cypress Tests](https://img.shields.io/badge/test-failure-red)


# Documentació

## Linter_job

### Creacio del repositori

![](documentacio/1.png)

![](documentacio/2.png)

### Creacio de la acció

![](documentacio/3.png)

### Push a github

![](documentacio/4.png)

![](documentacio/5.png)

### La verificacio de sintaxi de linter falla

![](documentacio/6.png)

### Arrreglada sintaxi de fitxers javascript

![](documentacio/7.png)

### La verificacio de sintaxi es un éxit

![](documentacio/8.png)

## Cypress_job

### Creacio del job

![](documentacio/9.png)

### Push a github

![](documentacio/10.png)

### El job s'efectua corectament

![](documentacio/11.png)

## Add_badge_job

### Creacio del job

![](documentacio/12.png)

### Creacio de la action add-badge-readme

![](documentacio/13.png)

### Push a github

![](documentacio/14.png)

### El job s'efectua corectament

![](documentacio/15.png)

![](documentacio/16.png)

## Deploy_job

### Creacio del projecte en vercel

![](documentacio/17.png)

### Creacio del token de vercel

![](documentacio/18.png)

### Creacio de secrets de github

![](documentacio/19.png)

### Creacio del job

![](documentacio/20.png)

### Push a github

![](documentacio/21.png)

![](documentacio/22.png)

### El job s'efectua corectament

![](documentacio/23.png)

### Desplegament de vercel

![](documentacio/24.png)

## Notification_job

### Creacio de secrets de github

![](documentacio/25.png)

### Creacio del job

![](documentacio/26.png)

![](documentacio/27.png)

![](documentacio/28.png)

![](documentacio/29.png)

### Push a github

![](documentacio/30.png)

### El job s'efectua corectament

![](documentacio/31.png)

### Se envia el email

![](documentacio/32.png)

## Metrics repositori personal

### Initzalització del repositori

![](documentacio/33.png)

![](documentacio/34.png)



### Actualitzacio readme

![](documentacio/35.png)

### Creacio de secret de github

![](documentacio/36.png)

### Creacio del job

![](documentacio/37.png)

### El job s'efectua corectament

![](documentacio/38.png)

### Metriques

![](documentacio/39.png)

# Introducció teòrica a GitHub Actions

GitHub Actions és una plataforma d’automatització que permet definir fluxos de treball dins dels repositoris de GitHub.  
Mitjançant fitxers de configuració escrits en YAML, es poden definir tasques automàtiques que s’executen quan es produeixen determinats esdeveniments, com ara un push, una pull request o fins i tot en intervals de temps programats.

Un workflow de GitHub Actions està compost per:
- **Esdeveniments (events)**: determinen quan s’executa el workflow (per exemple, quan es fa un push o cada 24 hores).
- **Jobs**: conjunts de passos que s’executen en una mateixa màquina virtual (runner).
- **Steps**: instruccions individuals que poden executar comandes o cridar altres accions.
- **Actions**: components reutilitzables que encapsulen funcionalitats concretes, com ara desplegar una aplicació, executar tests o enviar notificacions.

Gràcies a GitHub Actions es poden implementar processos d’integració i desplegament continus (CI/CD) sense necessitat d’utilitzar eines externes, millorant així la qualitat i l’eficiència del desenvolupament.
