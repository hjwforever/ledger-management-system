<template>
  <div class="home">
    <el-button
      @click="test1"
      type="primary"
    >Button1</el-button>
    <el-button
      @click="test2"
      type="info"
    >Button2</el-button>
    <el-button
      @click="getRandomAvatar"
      type="warning"
    >Button3</el-button> <br />
    <el-card class="card">
      <div>
        <el-avatar :src="user.picture.medium"></el-avatar>
      </div>
      <el-row>{{ user.name.first +' '+ user.name.last }}</el-row>
    </el-card>
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
  </div>
</template>

<script>
import { getDemo, getAvatar } from '@/api/user'
import dateUtil from '@/utils/dateUtil'

export default {
  name: 'Home',
  data () {
    return {
      user: {
        "gender": "male",
        "name": {
          "title": "mr",
          "first": "brad",
          "last": "gibson"
        },
        "location": {
          "street": "9278 new road",
          "city": "kilcoole",
          "state": "waterford",
          "postcode": "93027",
          "coordinates": {
            "latitude": "20.9267",
            "longitude": "-7.9310"
          },
          "timezone": {
            "offset": "-3:30",
            "description": "Newfoundland"
          }
        },
        "email": "brad.gibson@example.com",
        "login": {
          "uuid": "155e77ee-ba6d-486f-95ce-0e0c0fb4b919",
          "username": "silverswan131",
          "password": "firewall",
          "salt": "TQA1Gz7x",
          "md5": "dc523cb313b63dfe5be2140b0c05b3bc",
          "sha1": "7a4aa07d1bedcc6bcf4b7f8856643492c191540d",
          "sha256": "74364e96174afa7d17ee52dd2c9c7a4651fe1254f471a78bda0190135dcd3480"
        },
        "dob": {
          "date": "1993-07-20T09:44:18.674Z",
          "age": 26
        },
        "registered": {
          "date": "2002-05-21T10:59:49.966Z",
          "age": 17
        },
        "phone": "011-962-7516",
        "cell": "081-454-0666",
        "id": {
          "name": "PPS",
          "value": "0390511T"
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/75.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
        },
        "nat": "IE"
      },
    }
  },
  methods: {
    test1 () {
      this.$message.success(dateUtil.buildRandomDate(2021));
    },
    test2 () {
      getDemo()
        .then(res => {
          this.user = res.data.results[0];
        })
        .catch(err => {
          console.log(err);
        });
    },
    getRandomAvatar () {
      getAvatar()
        .then(res => {
          this.user.picture.medium = res.data.imgurl;
          this.user.name = {
            "title": "",
            "first": "",
            "last": ""
          };
        })
        .catch(err => {
          console.log(err);
        })
    }
  }
}
</script>

<style>
.card {
  position: relative;
  text-align: center;
  left: 50%;
  margin: 10px;
  transform: translateX(-50%);
  width: 200px;
}
</style>
