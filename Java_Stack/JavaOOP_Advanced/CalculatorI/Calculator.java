class Calculator implements java.io.Serializable {
	private double operandOne;
	private double operandTwo;
	private String operation;
	private double result;
	
	public Calculator() {

	}
	
	public Calculator performOperation(){
		if(this.operation=="+") {
			this.result=operandOne+operandTwo;
		}
		if(this.operation=="-") {
			this.result=operandOne-operandTwo;
		}
		return this;
	}
	public void setOperandOne(double operandOne) {
		this.operandOne = operandOne;
	}

	public void setOperandTwo(double operandTwo) {
		this.operandTwo = operandTwo;
	}

	public void setOperation(String operation) {
		this.operation = operation;
	}

	public double getResult() {
		return result;
	}  
}

