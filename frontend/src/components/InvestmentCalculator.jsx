import React, { useState } from 'react';
import { Calculator, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Slider } from './ui/slider';
import { Button } from './ui/button';

const InvestmentCalculator = () => {
  const [investment, setInvestment] = useState(100000);
  const [years, setYears] = useState(10);
  const [returnRate, setReturnRate] = useState(8);
  const [result, setResult] = useState(null);

  const calculateReturns = () => {
    const futureValue = investment * Math.pow(1 + returnRate / 100, years);
    const totalReturns = futureValue - investment;
    setResult({
      futureValue: futureValue.toFixed(2),
      totalReturns: totalReturns.toFixed(2),
      percentageGain: ((totalReturns / investment) * 100).toFixed(2)
    });
  };

  return (
    <section id="calculator" className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 mb-6">
            <Calculator className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-[#D4AF37] text-sm font-medium">Investment Tools</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1628] mb-4">
            Investment <span className="bg-gradient-to-r from-[#D4AF37] to-[#F4C430] bg-clip-text text-transparent">Calculator</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Estimate your potential returns and plan your financial future with our interactive calculator.
          </p>
        </div>

        {/* Calculator */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Card */}
            <Card className="border-2 border-[#D4AF37]/20 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-[#0A1628]">Enter Details</CardTitle>
                <CardDescription>Adjust the values to see potential returns</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Initial Investment */}
                <div className="space-y-3">
                  <Label htmlFor="investment" className="text-base font-semibold text-[#0A1628]">
                    Initial Investment
                  </Label>
                  <Input
                    id="investment"
                    type="number"
                    value={investment}
                    onChange={(e) => setInvestment(Number(e.target.value))}
                    className="text-lg border-[#D4AF37]/30 focus:border-[#D4AF37]"
                  />
                  <p className="text-sm text-gray-600">${investment.toLocaleString()}</p>
                </div>

                {/* Investment Period */}
                <div className="space-y-3">
                  <Label htmlFor="years" className="text-base font-semibold text-[#0A1628]">
                    Investment Period: {years} years
                  </Label>
                  <Slider
                    id="years"
                    value={[years]}
                    onValueChange={(value) => setYears(value[0])}
                    min={1}
                    max={30}
                    step={1}
                    className="w-full"
                  />
                </div>

                {/* Expected Return Rate */}
                <div className="space-y-3">
                  <Label htmlFor="returnRate" className="text-base font-semibold text-[#0A1628]">
                    Expected Annual Return: {returnRate}%
                  </Label>
                  <Slider
                    id="returnRate"
                    value={[returnRate]}
                    onValueChange={(value) => setReturnRate(value[0])}
                    min={1}
                    max={20}
                    step={0.5}
                    className="w-full"
                  />
                </div>

                <Button
                  onClick={calculateReturns}
                  className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F4C430] text-[#0A1628] font-semibold hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all text-lg py-6"
                >
                  Calculate Returns
                  <TrendingUp className="ml-2 w-5 h-5" />
                </Button>
              </CardContent>
            </Card>

            {/* Results Card */}
            <Card className="border-2 border-[#D4AF37]/20 shadow-xl bg-gradient-to-br from-[#0A1628] to-[#142444]">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Projected Results</CardTitle>
                <CardDescription className="text-gray-300">Based on your inputs</CardDescription>
              </CardHeader>
              <CardContent>
                {result ? (
                  <div className="space-y-6">
                    {/* Future Value */}
                    <div className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-6">
                      <p className="text-gray-400 text-sm mb-2">Future Value</p>
                      <p className="text-4xl font-bold text-[#D4AF37]">
                        ${Number(result.futureValue).toLocaleString()}
                      </p>
                    </div>

                    {/* Total Returns */}
                    <div className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-6">
                      <p className="text-gray-400 text-sm mb-2">Total Returns</p>
                      <p className="text-3xl font-bold text-[#F4C430]">
                        ${Number(result.totalReturns).toLocaleString()}
                      </p>
                    </div>

                    {/* Percentage Gain */}
                    <div className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-xl p-6">
                      <p className="text-gray-400 text-sm mb-2">Percentage Gain</p>
                      <p className="text-3xl font-bold text-white">
                        {result.percentageGain}%
                      </p>
                    </div>

                    <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-xl p-4 mt-6">
                      <p className="text-gray-300 text-sm leading-relaxed">
                        <strong className="text-[#D4AF37]">Note:</strong> This is a simplified calculation for illustrative purposes. Actual returns may vary based on market conditions and investment strategy.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full py-12">
                    <Calculator className="w-20 h-20 text-[#D4AF37] mb-4" />
                    <p className="text-gray-400 text-center">
                      Enter your investment details and click calculate to see projected returns.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentCalculator;