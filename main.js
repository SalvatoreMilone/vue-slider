let app = new Vue({

	el: "#root",
	data: {
		photos: [
			foto1 = {
				img: 'img/01.jpg',
				title: 'Svezia',
				subtitle: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
			},
			foto2 = {
				img: 'img/02.jpg',
				title: 'Svizzera',
				subtitle: 'Lorem ipsum',
			},
			foto3 = {
				img: 'img/03.jpg',
				title: 'Gran Bretagna',
				subtitle:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
			},
			foto4 = {
				img: 'img/04.jpg',
				title: 'Germania',
				subtitle:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
			},
			foto5 = {
				img: 'img/05.jpg',
				title: 'Paradise',
				subtitle: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
			}
		],
		
		counter:0,
		
	},
	methods: {
		contatore: function(index){
			if(index === this.counter){
				return true
			}else{
				return false
			}
		},
		counterup: function(){
			if(this.counter == 0){
				this.counter = this.photos.length-1;
			}else{
				this.counter--
			}
		},
		counterdown: function(){
			if(this.counter == this.photos.length-1){
				this.counter = 0;
			}else{
				this.counter++
			}
		},
		prevselected: function(index){
			if(index === this.counter){
				return "prevselectedclass"
			}else{
				return
			}
		},
		prevclick: function(index){
			this.counter = index;
		}
    }
});

Vue.config.devtools = true


