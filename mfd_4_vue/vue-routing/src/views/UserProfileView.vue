<template>
    <div v-for="user in users" :key="user.firstname">
    <h1>welcome {{ $route.params.userid}}</h1>
    <p>The user is {{ $route.params.userid }}</p>
    <router-link :to="{ name: 'userProfileView', params: {userid: user.firstname} }"> click </router-link>
    </div>
   
</template>

<script setup>

 const users = 
 {
	"nf2sjb19u7": {
		"email": "john@doe.com",
		"firstname": "John",
		"lastname": "Doe"
	},
	"nfkx6cywbs": {
		"email": "jane@doe.com",
		"firstname": "Jane",
		"lastname": "Doe"
	},
	"6auit2k477": {
		"email": "mdam@ucl.dk",
		"firstname": "Morten",
		"lastname": "Damgaard"
	},
	"a6uqet4p3c": {
		"email": "kjcl@ucl.dk",
		"firstname": "Kenneth",
		"lastname": "Clausen"
	},
	"kaqbxhoadq": {
		"email": "jvje@ucl.dk",
		"firstname": "Jakob",
		"lastname": "Jensen"
	}
}

</script>