<?php
 
 class First{
 	public $id = 23;
 	public $name = "Jason";

 	public function saySomething($word){
 		echo "somthing...".$word."<br/>";
 	}
 }

class Second extends First{
	public function getName(){
		echo $this->name."<br/>";
	}

	public function saySomething($w){
		echo "Second:".$w."<br/>";
	}
}

$second = new Second();
echo $second->name."<br/>";
$second->getName();
$second->saySomething("test");

?>