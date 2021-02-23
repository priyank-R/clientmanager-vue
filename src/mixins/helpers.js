export default {
  methods: {
    toValidUrl: (str) => {
        console.log('toValidUrl mixin invoked !')
      if (str.search("http://") == -1 && str.search("https://") == -1) {
        return (str = "http://" + str);
      } else {
        return str;
      }
    },
  },
};
