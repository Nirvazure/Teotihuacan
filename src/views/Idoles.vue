<template>
  <v-container>
    <h3>
      本页面收录了
      <countTo :endVal="idoles.length"></countTo>个人物
    </h3>
    <v-row>
      <v-slide-group class="pa-4">
        <v-slide-item class="ma-4" v-for="(type, index) in types" :key="index">
          <v-chip :color="type.name|type2Color" dark>
            <v-avatar left class="white darken-2" font-color="balck" dark>1</v-avatar>
            {{ type.name }}
            <v-avatar right>
              <v-icon>{{type.icon}}</v-icon>
            </v-avatar>
          </v-chip>
        </v-slide-item>
      </v-slide-group>
    </v-row>
    <v-row>
      <v-col cols="12" md="3" v-for="(idole, i) in idoles" :key="i">
        <v-hover v-slot:default="{ hover }">
          <v-card shaped :elevation="hover ? 12 : 2">
            <v-card-title>
              {{ idole.name }}
              <v-spacer></v-spacer>
              <v-chip dark :color="idole.color">{{ idole.type }}</v-chip>
            </v-card-title>
            <v-card-subtitle>
              <span>{{ idole.description }}</span>
            </v-card-subtitle>
            <v-img aspect-ratio="0.9" :src="idole.avatar" class="my-1"></v-img>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-progress-circular :color="idole.color" value="100"></v-progress-circular>
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import countTo from "vue-count-to";
export default {
  components: {
    countTo
  },
  data: () => ({
    stadium: require("@/assets/stadium.png"),
    types: [
      { name: "音乐", icon: "mdi-music" },
      { name: "足球", icon: "mdi-soccer" },
      { name: "艺术", icon: "mdi-palette" },
      { name: "动漫", icon: "" },
      { name: "虚构", icon: "mdi-account-circle" }
      // { name: "音乐", icon: "" }
    ],
    idoles: [
      {
        name: "星弟",
        avatar: require("@/assets/images/idoles/1.jpg"),
        description: "爱与幻想交织的星辰",
        type: "音乐",
        color: "teal lighten-3"
      },
      {
        name: "宇智波鼬",
        avatar: require("@/assets/images/idoles/2.jpg"),
        type: "动漫",
        description: "让红莲之火绽放的死神",
        color: "red darken-4"
      },
      {
        name: "怪盗KID",
        avatar: require("@/assets/images/idoles/3.jpg"),
        type: "动漫",
        description: "月光下的魔术师",
        color: "white darken-3"
      },
      {
        name: "星马烈",
        avatar: require("@/assets/images/idoles/4.jpg"),
        type: "动漫",
        description: "弯道王子",
        color: "red"
      },
      {
        name: "UnderTaker",
        avatar: require("@/assets/images/idoles/5.jpg"),
        description: "死亡谷的主人",
        color: "black"
      },
      {
        name: "Json Mraz",
        avatar: require("@/assets/images/idoles/6.jpg"),
        description: "231s",
        color: "red"
      },
      {
        name: "拉斐内",
        avatar: require("@/assets/images/idoles/7.jpg"),
        type: "动漫",
        description: "Phoenix艺术圣歌",
        color: "purple"
      },
      {
        name: "Pablo Aimar",
        avatar: require("@/assets/images/idoles/8.jpg"),
        type: "体育",
        description: "小丑",
        color: "blue lighten-3"
      },
      {
        name: "Criss Angel",
        avatar: require("@/assets/images/idoles/34.jpg"),
        description: "MindFreak",
        color: "blue lighten-3"
      },
      {
        name: "Lionel Messi",
        avatar: require("@/assets/images/idoles/10.jpg"),
        type: "体育",
        description: "上帝之手的天蓝色糖果",
        color: "blue lighten-3"
      },
      {
        name: "Marksim Mrvica",
        avatar: require("@/assets/images/idoles/11.jpg"),
        type: "音乐",
        description: "钢琴圣手",
        color: "blue lighten-3"
      },
      {
        name: "奥沙利文",
        avatar: require("@/assets/images/idoles/9.jpg"),
        type: "体育",
        description: "火箭",
        color: "blue lighten-3"
      },
      {
        name: "大空翼",
        avatar: require("@/assets/images/idoles/16.jpg"),
        type: "动漫",
        description: "足球是伙伴",
        color: "blue lighten-3"
      },
      {
        name: "鲁鲁修-兰佩洛奇",
        avatar: require("@/assets/images/idoles/14.jpg"),
        type: "动漫",
        description: "孤独之人才是真正的王者",
        color: "red"
      },
      {
        name: "尼尔-布坎南",
        avatar: require("@/assets/images/idoles/13.jpg"),
        type: "艺术",
        description: "奇思妙想的创意童年",
        color: "black"
      },
      {
        name: "杰克-斯派洛",
        avatar: require("@/assets/images/idoles/15.jpg"),
        type: "虚构",
        description: "海贼王",
        color: "red"
      },
      {
        name: "夏洛克-福尔摩斯",
        avatar: require("@/assets/images/idoles/7.jpg"),
        type: "虚构",
        description: "贝克街的侦探怪杰",
        color: "purple"
      },
      {
        name: "兰彻",
        avatar: require("@/assets/images/idoles/8.jpg"),
        type: "虚构",
        description: "小All is well",
        color: "blue lighten-3"
      },
      {
        name: "杰夫-哈迪",
        avatar: require("@/assets/images/idoles/17.jpg"),
        description: "彩虹战士",
        color: "blue lighten-3"
      },
      {
        name: "郭嘉",
        avatar: require("@/assets/images/idoles/22.jpg"),
        type: "体育",
        description: "早终的先知",
        color: "blue lighten-3"
      },
      {
        name: "Zach King",
        avatar: require("@/assets/images/idoles/21.jpg"),
        type: "艺术",
        description: "男巫",
        color: "blue lighten-3"
      },
      {
        name: "史蒂夫纳什",
        avatar: require("@/assets/images/idoles/19.jpg"),
        type: "体育",
        description: "火箭",
        color: "blue lighten-3"
      },
      {
        name: "L",
        avatar: require("@/assets/images/idoles/18.jpg"),
        type: "动漫",
        description: "足球是伙伴",
        color: "blue lighten-3"
      },
      {
        name: "帕斯托雷",
        avatar: require("@/assets/images/idoles/32.jpg"),
        type: "艺术",
        description: "腹语大师",
        color: "blue lighten-3"
      },
      {
        name: "加戈",
        avatar: require("@/assets/images/idoles/31.jpg"),
        type: "体育",
        description: "火箭",
        color: "blue lighten-3"
      },
      {
        name: "伊涅斯塔",
        avatar: require("@/assets/images/idoles/23.jpg"),
        type: "艺术",
        description: "腹语大师",
        color: "blue lighten-3"
      },
      {
        name: "啸雷",
        avatar: require("@/assets/images/idoles/27.jpg"),
        type: "体育",
        description: "火箭",
        color: "blue lighten-3"
      },
      {
        name: "莫德里奇",
        avatar: require("@/assets/images/idoles/24.jpg"),
        type: "体育",
        description: "火箭",
        color: "blue lighten-3"
      },
      {
        name: "三杉淳",
        avatar: require("@/assets/images/idoles/29.jpg"),
        type: "动漫",
        description: "足球是伙伴",
        color: "blue lighten-3"
      },
      {
        name: "Sagami",
        avatar: require("@/assets/images/idoles/20.jpg"),
        type: "艺术",
        description: "亚洲街足之王",
        color: "blue lighten-3"
      },
      {
        name: "Allen Iverson",
        avatar: require("@/assets/images/idoles/28.jpg"),
        type: "体育",
        description: "Only Strong Survive",
        color: "blue lighten-3"
      },
      {
        name: "司马懿",
        avatar: require("@/assets/images/idoles/25.jpg"),
        type: "虚构",
        description: "狼顾之鬼",
        color: "blue lighten-3"
      },
      {
        name: "诸葛亮",
        avatar: require("@/assets/images/idoles/30.jpg"),
        type: "虚构",
        description: "早终的先知",
        color: "blue lighten-3"
      }
    ]
  }),
  filters: {
    type2Color(v) {
      if (v == "音乐") {
        return "teal lighten-3";
      } else if (v == "动漫") {
        return "red";
      } else if (v == "艺术") {
        return "purple";
      } else if (v == "足球") {
        return "indigo";
      } else {
        return;
      }
    }
  }
};
</script>

<style></style>
