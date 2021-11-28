# React Notlarım
27.11.2021

## 1. React Dosyalarını Çekme 

* Aşağıdaki kod bloğu belirtilen isimle react uygulamasını oluşturur ve başlatır.

```
npx create-react-app my-app
cd my-app
npm start
```

## 2. React Router Oluşturma

* React uygulamalarında yönlendirmeler için kullanılan standart bir kütüphanedir.
* Proje dosyasına konumlanarak aşağıdaki kod bloğu çalıştırılır.

```
cd my-app
npm i history react-router-dom@next
```

## 3. Styled Components Kütüphanesinin Eklenmesi

* Stiller oluşturmamıza yardımcı olan kütüphane. Dokümantasyon için [tıkla.](https://styled-components.com/docs/basics)

```
npm i styled-components
```

## 4. PropTypes Kütüphanesinin Eklenmesi


```
npm i prop-types
```

## 5. .env Dosyası ekleme

Ana dizinde environment dosyasının oluşturulup içine movie api key eklenmesi.

```
REACT_APP_API_KEY=key_will_be_pasted_here
```

## 6. Styled Components İçin Eklenti Kurulması

- VsCode üzerinden 'vscode-styled-components' eklentisinin kurulması gerekmektedir.